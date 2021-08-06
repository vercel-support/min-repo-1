import { queryField, nonNull, list } from 'nexus'

export const IndustryFindCountQuery = queryField('findManyIndustryCount', {
  type: nonNull('Int'),
  args: {
    where: 'IndustryWhereInput',
    orderBy: list('IndustryOrderByInput'),
    cursor: 'IndustryWhereUniqueInput',
    distinct: 'IndustryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.industry.count(args as any)
  },
})
