import { queryField, nonNull, list } from 'nexus'

export const StatusFindManyQuery = queryField('findManyStatus', {
  type: nonNull(list(nonNull('Status'))),
  args: {
    where: 'StatusWhereInput',
    orderBy: list('StatusOrderByInput'),
    cursor: 'StatusWhereUniqueInput',
    distinct: 'StatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.status.findMany({
      ...args,
      ...select,
    })
  },
})
