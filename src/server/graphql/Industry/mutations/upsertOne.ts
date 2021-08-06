import { mutationField, nonNull } from 'nexus'

export const IndustryUpsertOneMutation = mutationField('upsertOneIndustry', {
  type: nonNull('Industry'),
  args: {
    where: nonNull('IndustryWhereUniqueInput'),
    create: nonNull('IndustryCreateInput'),
    update: nonNull('IndustryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.industry.upsert({
      ...args,
      ...select,
    })
  },
})
