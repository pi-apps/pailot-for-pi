import 'express-session';

declare module 'express-session' {
	export interface SessionData {
		currentUser: { [key: string]: any } | null; // Replace this with the UserType definition when database have been implemented
	}
}
