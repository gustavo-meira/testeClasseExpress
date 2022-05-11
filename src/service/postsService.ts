import PostsModel from '../model/postsModel';
import PostsType from '../types/postsTypes';

class PostsService {

  private postsModel: PostsModel;

  constructor() {
    this.postsModel = new PostsModel();
  }

  public async getAll(): Promise<PostsType[]> {
    const posts = await this.postsModel.getAll();
    return posts;
  }

  public async getById(id: number): Promise<PostsType> {
    const [post] = await this.postsModel.getById(id);
    return post;
  }

  public async create(post: PostsType): Promise<number> {
    const insertedId = await this.postsModel.create(post);
    return insertedId;
  }

}

export default PostsService;
