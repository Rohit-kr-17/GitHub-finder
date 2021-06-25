class GitHub {
  constructor() {
    this.client_id = "d16b69043cdabe9f3ba9";
    this.client_secret = "8058d7bbf2e2077768a1b60cf9a752cdbf10ed67";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profilResponse = await fetch(
      `https://api.github.com/users/${ user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${ user }/repos?per_page=${ this.repos_count }&sort=${ this.repos_sort }&client_id=${ this.client_id }&client_secret=${ this.client_secret }`
    );

    const profile = await profilResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, repos
    }
  }
}
