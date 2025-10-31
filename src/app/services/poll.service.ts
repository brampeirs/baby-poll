import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Poll, PollPostDto } from './poll.model';

@Injectable({ providedIn: 'root' })
export class PollService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  private readonly _polls$ = new BehaviorSubject<Poll[]>([]);
  private readonly _isRequesting$ = new BehaviorSubject<boolean>(false);

  public readonly polls$ = this._polls$.asObservable();
  public readonly isRequesting$ = this._isRequesting$.asObservable();

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.initSession();
  }

  get session() {
    return this._session;
  }

  async initSession() {
    const { data } = await this.supabase.auth.getSession();
    this._session = data.session;
    return this._session;
  }

  async loadPolls() {
    this._isRequesting$.next(true);
    const { data } = await this.supabase.from('names').select('*');
    this._polls$.next(data as Poll[]);
    this._isRequesting$.next(false);
  }

  postPoll(poll: PollPostDto) {
    return this.supabase.from('names').insert(poll);
  }
}
