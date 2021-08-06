import { mutationField, nonNull } from 'nexus'

export const IndustryDeleteManyMutation = mutationField('deleteManyIndustry', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'IndustryWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.industry.deleteMany({ where } as any)
  },
})
