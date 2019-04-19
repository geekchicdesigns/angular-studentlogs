import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model'

@Injectable()
export class VoterService {

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string ){
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    // some() => method on voters[] (event.service.ts) which returns boolean
    // when there is at least one element which matches conditional params
   return session.voters.some(voter => voter === voterName);

   // if value of (session.voters[] === voterName); return as true; if not, then false
  }
}
