import { queryField, list } from 'nexus'

export const FrequencyAggregateQuery = queryField('aggregateFrequency', {
  type: 'AggregateFrequency',
  args: {
    where: 'FrequencyWhereInput',
    orderBy: list('FrequencyOrderByInput'),
    cursor: 'FrequencyWhereUniqueInput',
    distinct: 'FrequencyScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.frequency.aggregate({ ...args, ...select }) as any
  },
})
