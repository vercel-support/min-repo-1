import { objectType } from 'nexus'

export const ServiceModel = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ServiceModel',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountServiceModel', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountServiceModel
      },
    })
    t.nullable.field('_count', {
      type: 'ServiceModelCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
