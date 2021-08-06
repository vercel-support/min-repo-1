import { objectType } from 'nexus'

export const Language = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Language',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactLanguagesSpoken', {
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
        return root.ContactLanguagesSpoken
      },
    })
    t.list.field('AccountPrimaryLanguage', {
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
        return root.AccountPrimaryLanguage
      },
    })
    t.list.field('AccountSecondaryLanguage', {
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
        return root.AccountSecondaryLanguage
      },
    })
    t.list.field('UserLanguage', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.UserLanguage
      },
    })
    t.nullable.field('_count', {
      type: 'LanguageCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
