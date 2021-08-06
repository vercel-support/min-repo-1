import { objectType } from 'nexus'

export const OperatingHours = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OperatingHours',
  definition(t) {
    t.string('id')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.string('description')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('name')
    t.nullable.field('timeZone', {
      type: 'TimeZone',
      resolve(root: any) {
        return root.timeZone
      },
    })
    t.nullable.string('timeZoneId')
    t.list.field('AccountOperatingHours', {
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
        return root.AccountOperatingHours
      },
    })
    t.nullable.field('_count', {
      type: 'OperatingHoursCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
