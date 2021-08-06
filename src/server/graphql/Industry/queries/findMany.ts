import { queryField, nonNull, list } from 'nexus'

export const IndustryFindManyQuery = queryField('findManyIndustry', {
  type: nonNull(list(nonNull('Industry'))),
  args: {
    where: 'IndustryWhereInput',
    orderBy: list('IndustryOrderByInput'),
    cursor: 'IndustryWhereUniqueInput',
    distinct: 'IndustryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.industry.findMany({
      ...args,
      ...select,
    })
  },
})
