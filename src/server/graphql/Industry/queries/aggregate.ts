import { queryField, list } from 'nexus'

export const IndustryAggregateQuery = queryField('aggregateIndustry', {
  type: 'AggregateIndustry',
  args: {
    where: 'IndustryWhereInput',
    orderBy: list('IndustryOrderByInput'),
    cursor: 'IndustryWhereUniqueInput',
    distinct: 'IndustryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.industry.aggregate({ ...args, ...select }) as any
  },
})
