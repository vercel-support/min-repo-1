import { mutationField, nonNull } from 'nexus'

export const StageUpdateOneMutation = mutationField('updateOneStage', {
  type: nonNull('Stage'),
  args: {
    where: nonNull('StageWhereUniqueInput'),
    data: nonNull('StageUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.stage.update({
      where,
      data,
      ...select,
    })
  },
})
