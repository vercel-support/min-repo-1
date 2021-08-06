import { objectType } from 'nexus'

export const Ownership = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Ownership',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AssetsAndLiabilitiesOwnership', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesOwnership
      },
    })
    t.list.field('AccountOwnership', {
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
        return root.AccountOwnership
      },
    })
    t.nullable.field('_count', {
      type: 'OwnershipCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
