import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/user/routes';

class Routes {

    private router: UserRoutes;

    constructor(app: Application){
        this.router = new UserRoutes;
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/api/user').get(this.router.index);
        app.route('/api/user').post(this.router.create);
        app.route('/api/user/:id').get(this.router.findOne);
        app.route('/api/user/:id').put(this.router.update);
        app.route('/api/user/:id').delete(this.router.delete);
    }

}

export default Routes;