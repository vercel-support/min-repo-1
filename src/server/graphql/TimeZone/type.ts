import { objectType } from 'nexus'

export const TimeZone = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TimeZone',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('operatingHours', {
      type: 'OperatingHours',
      args: {
        where: 'OperatingHoursWhereInput',
        orderBy: 'OperatingHoursOrderByInput',
        cursor: 'OperatingHoursWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OperatingHoursScalarFieldEnum',
      },
      resolve(root: any) {
        return root.operatingHours
      },
    })
    t.list.field('ContactTimeZone', {
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
        return root.ContactTimeZone
      },
    })
    t.list.field('UserTimeZone', {
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
        return root.UserTimeZone
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
      type: 'TimeZoneCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
