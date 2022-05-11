import { Request, Response } from 'express';
import PostsService from '../service/postsService';

class PostsController {

  public async getAll(_req: Request, res: Response) {
    const postsService = new PostsService();
    const posts = await postsService.getAll();
    res.status(200).json({posts});
  }

  public async getById(req: Request, res: Response) {
    const postsService = new PostsService();
    const { id } = req.params;
    const post = await postsService.getById(Number(id));
    res.status(200).json(post);
  }

  public async create(req: Request, res: Response) {
    const { title, author, category, publicationDate } = req.body;
    const postsService = new PostsService();
    const insertedId = await postsService.create({ title, author, category, publicationDate });
    res.status(201).json({
      id: insertedId,
      title,
      author,
      category,
      publicationDate,
    });
  }

}

export default PostsController;
