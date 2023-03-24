import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      throw new InternalServerErrorException();
    });

    return newCar;
  }

  public async deleteCar(id: string): Promise<Car> {
    const carToDelete = await this.carRepository.findOneById(id);
    if (!carToDelete) {
      throw new Error(`Car with ID ${id} not found`);
    }
    await this.carRepository.remove(carToDelete);
    return { ...carToDelete, id };
  }
}
