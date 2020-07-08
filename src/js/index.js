import "../scss/main.scss";

const GIT_API_URL_REPOS = 'https://api.github.com/users/mateuszsuberlak/repos?sort=created&direction=desc';

const githubRepoListElement = document.querySelector('.github-repo-list--js');

const githubConsoleTemplate = document.querySelector('.github-repo-console-template--js')

fetch(GIT_API_URL_REPOS)
  .then(response => response.json())
  .then(data => data.map(x => SetGitHubReposiotryData(x)))
  .catch((error) => {
    console.error("Error accessing github api:", error);
  });


  function SetGitHubReposiotryData(repoData){
    console.log('repoData-',repoData);
    const consoleTemplateClone = githubConsoleTemplate.content.cloneNode(true);

    const repoNameElement = consoleTemplateClone.querySelector('.github-project-name--js');
    repoNameElement.textContent = repoData.name

    const repoDescriptionElement = consoleTemplateClone.querySelector('.github-project-description--js');
    repoDescriptionElement.textContent = repoData.description

    const repoDemoUrlElement = consoleTemplateClone.querySelector('.github-project-demo-url--js');
    console.log(repoDemoUrlElement);
    repoDemoUrlElement.innerHTML =  repoData.homepage ? '<a href="' +repoData.homepage+'">see here</a>' : 'none';

    const repoUrlElement = consoleTemplateClone.querySelector('.github-project-repo-url--js');
    repoUrlElement.innerHTML = repoData.html_url ? '<a href="' +repoData.html_url+'">source_code</a>' : 'none';

    githubRepoListElement.appendChild(consoleTemplateClone);

  }