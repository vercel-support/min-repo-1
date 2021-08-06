import { objectType } from 'nexus'

export const IndividualType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'IndividualType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('IndividualType', {
      type: 'Individual',
      args: {
        where: 'IndividualWhereInput',
        orderBy: 'IndividualOrderByInput',
        cursor: 'IndividualWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IndividualScalarFieldEnum',
      },
      resolve(root: any) {
        return root.IndividualType
      },
    })
    t.list.field('ContactIndividualType', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactIndividualType
      },
    })
    t.list.field('AccountIndividualType', {
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
        return root.AccountIndividualType
      },
    })
    t.nullable.field('_count', {
      type: 'IndividualTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
