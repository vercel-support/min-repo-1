import { queryField, nonNull } from 'nexus'

export const IndustryFindUniqueQuery = queryField('findUniqueIndustry', {
  type: 'Industry',
  args: {
    where: nonNull('IndustryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.industry.findUnique({
      where,
      ...select,
    })
  },
})
