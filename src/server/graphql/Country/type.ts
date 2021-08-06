import { objectType } from 'nexus'

export const Country = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Country',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactCountryOfBirth', {
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
        return root.ContactCountryOfBirth
      },
    })
    t.list.field('ContactCountryOfResidence', {
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
        return root.ContactCountryOfResidence
      },
    })
    t.list.field('AccountPrimaryCitizenshipCountry', {
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
        return root.AccountPrimaryCitizenshipCountry
      },
    })
    t.list.field('AccountSecondaryCitizenshipCountry', {
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
        return root.AccountSecondaryCitizenshipCountry
      },
    })
    t.list.field('Account', {
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
        return root.Account
      },
    })
    t.nullable.field('_count', {
      type: 'CountryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
