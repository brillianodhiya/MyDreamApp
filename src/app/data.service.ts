import { retry, catchError, tap } from "rxjs/operators";

declare class dataService {
  constructor(dataservice: string);

  public first: string;
  public prev: string;
  public next: string;
  public last: string;
}
