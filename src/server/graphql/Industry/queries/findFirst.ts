import { queryField, list } from 'nexus'

export const IndustryFindFirstQuery = queryField('findFirstIndustry', {
  type: 'Industry',
  args: {
    where: 'IndustryWhereInput',
    orderBy: list('IndustryOrderByInput'),
    cursor: 'IndustryWhereUniqueInput',
    distinct: 'IndustryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.industry.findFirst({
      ...args,
      ...select,
    })
  },
})
