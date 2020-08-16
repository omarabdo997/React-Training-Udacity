import React, {Component} from 'react';

class FavouriteMovieList extends Component {
  render(){
   	const users=this.props.users;
    const movies=this.props.movies;
  	return (
      <ol>
      	{this.props.profiles.map((profile) => (
      		<li key = {profile.id}>
				{`${users[profile.userID].name} favourite movie is ${movies[profile.favoriteMovieID].name}`}
      		</li>
    	))}
      </ol>
    )
  }
}
export default FavouriteMovieList;