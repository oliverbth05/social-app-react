import React                from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeLayout, changeSort, fetchPosts, searchTermHandler } from '../actions';

class HomeNav extends React.Component  {
    
    
    state = {
        searchTerm: ''
    }
    
    inputHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    
    render() {
        
   
    return (
        <nav className = 'home-nav'>
                    
            <div className = 'small-flex-start'>
                <button onClick = { () => {this.props.changeLayout('list')}} className = { this.props.layout === 'list' ? 'layout-button layout-button-active m-r-s' : 'layout-button m-r-s'}>
                    <i class="fas fa-list-ul "></i>
                    <span className = 'layout-button__tooltip'>List</span>
                </button>
                
                <button onClick = { () => {this.props.changeLayout('grid')}} className = { this.props.layout === 'grid' ? 'layout-button layout-button-active m-r-s' : 'layout-button m-r-s'}>
                    <i class="fas fa-th"></i>
                    <span className = 'layout-button__tooltip'>Grid</span>
                </button>  
                
                <span className = 'm-l-3 m-r-1'>
                    Sort
                </span>
                
                <div className = 'btn-group'>
                    <button onClick = {() => {this.props.changeSort('Recent')}} className = { this.props.sort === 'Recent' ? 'sort-button sort-button-active' : 'sort-button'}>
                        <i class="fas fa-clock"></i>
                        <span className = 'sort-button__tooltip'>Date</span>
                    </button>
                        
                    <button onClick = {() => {this.props.changeSort('Likes')}} className = { this.props.sort === 'Likes' ? 'sort-button sort-button-active' : 'sort-button'}>
                        <i class="fas fa-thumbs-up"></i>
                        <span className = 'sort-button__tooltip'>Likes</span>
                    </button>
                        
                    <button onClick = {() => {this.props.changeSort('Views')}} className = { this.props.sort === 'Views' ? 'sort-button sort-button-active' : 'sort-button'}>
                        <i class="fas fa-eye"></i>
                        <span className = 'sort-button__tooltip'>Views</span>
                    </button>
                </div>
                
            </div>    
                
            <h4 className='font-normal color-secondary text-center'>{this.props.sort}</h4>

            <div className = 'home-nav__search'>
                <input onChange = {this.inputHandler.bind(this)} className = 'input-block m-r-s' placeholder = 'Search posts' />
                {this.state.searchTerm ?
                <Link className = 'btn btn-primary' to = {`/search/${this.state.searchTerm}`} className = 'btn btn-primary'>Search</Link>
                :
                <button disabled className = 'btn btn-primary btn-primary-disabled'>Search</button>
                }
            </div>
         
        </nav>
    )
    
    }
}

const mapStateToProps = state => {
    return {
        posts: state.home.posts,
        layout: state.home.layout,
        sort: state.home.sort,
        page: state.home.page,
    }
}

export default connect(mapStateToProps, {changeLayout, changeSort, fetchPosts})(HomeNav);