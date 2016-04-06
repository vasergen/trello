import DbDriver from './_shared/DbDriver.js'

export default function FactoryDbDriver(ServiceConfig, ServiceHelper, $timeout, $q) {
    return function() {
        return new DbDriver(ServiceConfig, ServiceHelper, $timeout, $q)
    }
}