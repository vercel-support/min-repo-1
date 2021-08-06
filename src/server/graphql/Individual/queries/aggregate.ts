import { queryField, list } from 'nexus'

export const IndividualAggregateQuery = queryField('aggregateIndividual', {
  type: 'AggregateIndividual',
  args: {
    where: 'IndividualWhereInput',
    orderBy: list('IndividualOrderByInput'),
    cursor: 'IndividualWhereUniqueInput',
    distinct: 'IndividualScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.individual.aggregate({ ...args, ...select }) as any
  },
})
