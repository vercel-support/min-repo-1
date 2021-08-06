import { mutationField, nonNull } from 'nexus'

export const IndustryUpdateOneMutation = mutationField('updateOneIndustry', {
  type: nonNull('Industry'),
  args: {
    where: nonNull('IndustryWhereUniqueInput'),
    data: nonNull('IndustryUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.industry.update({
      where,
      data,
      ...select,
    })
  },
})
