import { ResultSetHeader } from 'mysql2';
import PostsType from '../types/postsTypes';
import connection from './connection';

class PostsModel {

  public async getAll(): Promise<PostsType[]> {
    const [posts] = await connection.query('SELECT * FROM Posts');
    return posts as PostsType[];
  }

  public async getById(id: number): Promise<PostsType[]> {
    const [post] = await connection.query('SELECT * FROM Posts WHERE id = ?', [id]);
    return post as PostsType[];
  }

  public async create(post: PostsType): Promise<number> {
    const { title, author, category, publicationDate } = post;
    const [newPost] = await connection.query<ResultSetHeader>(`
      INSERT INTO Posts (title, author, category, publicationDate)
      VALUES (?, ?, ?, ?)
    `, [title, author, category, publicationDate]);

    return newPost.insertId;
  }

}

export default PostsModel;
