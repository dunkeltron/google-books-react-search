import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import {FormBtn, Input, TextArea} from "../components/Form";
import {Col,Container,Row} from "../components/Grid"
import {List, ListItem} from "../components/List";
import API from "../utils/api/API"
export default class Home extends Component {
    state = {
        books: [],
        book : "",
        title: "",
        author: "",
        synopsis: "",
        googleId: "",
        subtitle: ""

    }
    componentDidMount() {
        //this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "",googleId:"", subtitle:"" })
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
          event.preventDefault();
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    saveBook= (bookOb) => {
      API.saveBook(bookOb)
      .then(function(data){
        console.log(data);
      });
    }
      handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.book){
            API.searchBooks(this.state.book)
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data})
            })
            .catch(err => console.log(err));
        }
          
        
      };

  render() {
    return (
              <Container fluid>
                <Row>
                  <Col size="md-12">
                    <Jumbotron>
                      <h1>(React) Google Books Search</h1>
                    </Jumbotron>
                    <form>
                      <Input
                        value={this.state.book}
                        onChange={this.handleInputChange}
                        name="book"
                        placeholder="Title (required)"
                      />
                      <FormBtn
                        //disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                      >
                        Submit Book
                      </FormBtn>
                    </form>
                  </Col>
                  <Col size="sm-12">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                
                                <ListItem key={book.id} data = {book}>
                    {/* <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                    
                                </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
                </Row>
              </Container>
    )     
  }
    
}
