import { User, defaultUser, setCurrentUser } from 'mongez/user';

const user: User = defaultUser();

setCurrentUser(user);

export default user;