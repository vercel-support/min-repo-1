import { queryField, list } from 'nexus'

export const StatusFindFirstQuery = queryField('findFirstStatus', {
  type: 'Status',
  args: {
    where: 'StatusWhereInput',
    orderBy: list('StatusOrderByInput'),
    cursor: 'StatusWhereUniqueInput',
    distinct: 'StatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.status.findFirst({
      ...args,
      ...select,
    })
  },
})
