class Github {
  constructor() {
    this.client_id = "ec426d45b19a6ebf7dd7";
    this.client_secret = "0d47d14fd9ec4f6e1492e11a725c04ee3d73bf75";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}
