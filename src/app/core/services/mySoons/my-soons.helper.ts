import { mySoon } from './my-soons.model';
import { ApimySoon } from './api/api-mySoons.model';


export function transformSoon(apiMySoon: ApimySoon): mySoon {
    delete apiMySoon.createdAt;
    return apiMySoon;
}