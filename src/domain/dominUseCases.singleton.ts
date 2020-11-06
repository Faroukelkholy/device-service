import DatabaseAdapter from '../adapters/database/database.singleton';
import IDomainUseCasesPort from '../ports/input/IDomainUseCasesPort';
import DomainUseCases from './useCase';

export default class DomainUseCasesSingleton {
    private static instance: DomainUseCasesSingleton;
    public DomainUseCases: IDomainUseCasesPort;


    private constructor() { }
    public static async getInstance(): Promise<DomainUseCasesSingleton> {
        if (!DomainUseCasesSingleton.instance) {
            const databaseAdapter = await DatabaseAdapter.getInstance()
            DomainUseCasesSingleton.instance = new DomainUseCasesSingleton();
            DomainUseCasesSingleton.instance.DomainUseCases = new DomainUseCases(databaseAdapter.adapter)
        }
        return DomainUseCasesSingleton.instance;
    }
}
