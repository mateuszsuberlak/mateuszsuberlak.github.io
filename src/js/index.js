import "../scss/main.scss";

const GIT_API_URL_REPOS = 'https://api.github.com/users/mateuszsuberlak/repos?sort=created&direction=desc';

const githubRepoListElement = document.querySelector('.github-repo-list--js');

fetch(GIT_API_URL_REPOS)
  .then(response => response.json())
  .then(data => data.map(x => SetGitHubReposiotryData(x)))
  .catch((error) => {
    console.error("Error accessing github api:", error);
  });


  function SetGitHubReposiotryData(repoData){

  }