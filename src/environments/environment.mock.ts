import { MockModule } from '../app/modules/mock/mock.module';

export const environment = {
    // could be production=true and mocking=true.  dumb
    production: false,
    dataModule: MockModule,
};