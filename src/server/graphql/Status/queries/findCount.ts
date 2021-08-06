import { queryField, nonNull, list } from 'nexus'

export const StatusFindCountQuery = queryField('findManyStatusCount', {
  type: nonNull('Int'),
  args: {
    where: 'StatusWhereInput',
    orderBy: list('StatusOrderByInput'),
    cursor: 'StatusWhereUniqueInput',
    distinct: 'StatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.status.count(args as any)
  },
})
