import { queryField, list } from 'nexus'

export const GenderAggregateQuery = queryField('aggregateGender', {
  type: 'AggregateGender',
  args: {
    where: 'GenderWhereInput',
    orderBy: list('GenderOrderByInput'),
    cursor: 'GenderWhereUniqueInput',
    distinct: 'GenderScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.gender.aggregate({ ...args, ...select }) as any
  },
})
