import { Router } from 'express';
import PostsController from '../controller/postsController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.get('/', postsController.getAll);
postsRouter.get('/:id', postsController.getById);
postsRouter.post('/', postsController.create);

export default postsRouter;
