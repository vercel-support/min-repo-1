import { mutationField, nonNull } from 'nexus'

export const IndustryUpdateManyMutation = mutationField('updateManyIndustry', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'IndustryWhereInput',
    data: nonNull('IndustryUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.industry.updateMany(args as any)
  },
})
