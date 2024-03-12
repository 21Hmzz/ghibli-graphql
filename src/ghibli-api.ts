import {RESTDataSource} from '@apollo/datasource-rest';
import {Location, Movie, People, Species, Vehicle} from "./types.ts";


export class GhibliAPI extends RESTDataSource {
    override baseURL = 'https://ghibliapi.dev/';

    async getMovie(id: string): Promise<Movie> {
        return this.get<Movie>(`films/${encodeURIComponent(id)}`);
    }

    async allMovies(limit = '10'): Promise<Movie[]> {
        return await this.get('films', {
            params: {
                per_page: limit.toString(),
                order_by: 'release_date',
            },
        });
    }

    async getPeoples(): Promise<People> {
        return await this.get('people');
    }

    async getPerson(id: string): Promise<People> {
        return await this.get(`people/${id}`);
    }

    async getSpecies(id: string): Promise<Species> {
        return await this.get(`species/${id}`);
    }

    async getAllSpecies(): Promise<Species> {
        return await this.get('species');
    }

    async getLocation(id: string): Promise<Location> {
        return await this.get(`locations/${id}`);
    }

    async getLocations(): Promise<Location> {
        return await this.get('locations');
    }

    async getVehicle(id: string): Promise<Vehicle> {
        return await this.get(`vehicles/${id}`);
    }

    async getVehicles(): Promise<Vehicle> {
        return await this.get('vehicles');
    }




}