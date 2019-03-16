import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GithubRanking } from 'src/model/githubRanking';
@Injectable({
  providedIn: 'root'
})
export class GitHubRestService {
  private url: string = "https://api.github.com/";
  constructor(private httpClient: HttpClient) { }

  pesquisaRepositorios(linguagem : string) : Observable<GithubRanking[]> {
    let params = new HttpParams().set("q", 'language:'+linguagem);
    return this.httpClient
        .get<any>(this.url + 'search/repositories', {params : params})
        .pipe(
            map(resposta => {
                if (resposta && resposta.items)
                    return resposta.total_count;
                else
                    return [];
            }),
            catchError(error => {
                console.log('[GitHubRestService] ' + error);
                return Observable.throw(error); })
        );
  }
}
