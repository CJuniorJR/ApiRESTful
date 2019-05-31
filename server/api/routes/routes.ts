import { Application, Request, Response } from 'express';

class Routes {

    constructor(app: Application){
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/').get((req: Request,res: Response) => res.send('Hello World'));
        app.route('/pessoa/:nome').get((req: Request, res: Response) => res.send(`Hello ${req.params.nome}`));
    }

}

export default Routes;