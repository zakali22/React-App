var React = require('react');
var NavBar = require('./Navbar');

class RepoGrid extends React.Component {
  render(){
    console.log(this.props.repos);
    return (
      <ul className="fullRepo">
        {this.props.repos.map(function(repo, index){
          return (
            <li key={repo.name} className="eachSection">
              <p>#{index + 1}</p>
              <ul>
                <li>
                  <a href={repo.html_url}>
                    <img
                      className="image"
                      src={repo.owner.avatar_url}/>
                  </a>
                </li>
                <li>
                  <a href={repo.html_url}>
                  {repo.name}
                  </a>
                </li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
                <li>{repo.forks_count} forks</li>
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }
}


module.exports = RepoGrid;
