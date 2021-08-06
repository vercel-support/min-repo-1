import { mutationField, nonNull } from 'nexus'

export const IndustryDeleteOneMutation = mutationField('deleteOneIndustry', {
  type: 'Industry',
  args: {
    where: nonNull('IndustryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.industry.delete({
      where,
      ...select,
    })
  },
})
