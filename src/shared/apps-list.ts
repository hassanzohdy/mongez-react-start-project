import { setApps } from "mongez/router";
import adminApp from 'apps/admin/admin-modules.json';
import frontOfficeApp from 'apps/front-office/front-office-modules.json';

setApps([
  adminApp,
  frontOfficeApp
]);