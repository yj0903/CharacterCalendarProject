import { itemService } from '../services';
import { AsyncRequestHandler } from '../types';

interface itemControllerInterface {
    getItems: AsyncRequestHandler;
    getItem: AsyncRequestHandler;
    createItem: AsyncRequestHandler;
    updateItem: AsyncRequestHandler;
    deleteItem: AsyncRequestHandler;
}

export const itemController: itemControllerInterface = {
    async getItems(req, res) {
        const items = await itemService.getItems();
        res.json(items);
    },
    async getItem(req, res) {
        const { id } = req.params;
        const item = await itemService.getItem(id);
        res.json(item);
    },
    async createItem(req, res) {
        const response = await itemService.createItem(req.body);
        res.json(response);
    },
    async updateItem(req, res) {
        const response = await itemService.updateItem(req.body);
        res.json(response);
    },
    async deleteItem(req, res) {
        const { id } = req.params;
        const response = await itemService.deleteItem(id);
        res.json(response);
    },
};
